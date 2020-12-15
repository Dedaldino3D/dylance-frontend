import { schema } from "normalizr";

export const userSchema = new schema.Entity("user");

export const usersSchema = [userSchema];

export const jobSchema = new schema.Entity("job");

export const jobsSchema = [jobSchema];
