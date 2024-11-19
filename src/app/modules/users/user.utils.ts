import { User } from './user.model';

let lastUserId = 0;

export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin?.id?.substring(4) : undefined;
};

export const generateAdminId = async () => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};

export const findLastContentWriterId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'content-writer',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin?.id?.substring(4) : undefined;
};

export const generateContentWriterId = async () => {
  const currentId =
    (await findLastContentWriterId()) || (0).toString().padStart(5, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `CW-${incrementedId}`;

  return incrementedId;
};
