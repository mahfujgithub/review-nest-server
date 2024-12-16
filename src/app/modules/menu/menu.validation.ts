import z from "zod";

const createMenuZodSchema = z.object({
  body: z.object({
    menu: z.string({
      required_error: 'field is required!',
    }),
    subMenu: z.string({
      required_error: 'SubMenu is required!',
    }),
  }),
});

export const MenuValidation = {
  createMenuZodSchema,
};
