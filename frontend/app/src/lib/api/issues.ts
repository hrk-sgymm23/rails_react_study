import client from "./client";
import { Issue } from "../../interfaces/index";

export const getIssues = () => {
    return client.get("/issues")
}

export const createIssue = (data: Issue) => {
    return client.post("/issues", data)
}

export const deleteIssue = (id: number) => {
    return client.delete(`/issues/${id}`)
}
