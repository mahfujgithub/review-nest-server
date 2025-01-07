export default function buildNestedUpdateQuery(payload: any, prefix: string = ''): any {
  const updateQuery: any = {};

  Object.keys(payload).forEach(key => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(payload[key])) {
      updateQuery[path] = payload[key]; // Replace whole array
    } else if (typeof payload[key] === 'object' && payload[key] !== null) {
      Object.assign(updateQuery, buildNestedUpdateQuery(payload[key], path));
    } else {
      updateQuery[path] = payload[key];
    }
  });

  return updateQuery;
}

