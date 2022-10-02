import React from "react"
import { deleteIssue } from "../lib/api/issues"
import { Issue } from "../interfaces/index"

interface IssueItemProps {
    issue: Issue
    setIssues: Function
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue, setIssues }) => {
    const handleDeleteIssue = async (id: number) => {
        try {
            const res = await deleteIssue(id)
            console.log(res)

            if(res?.status === 200) {
                setIssues((prev: Issue[]) => prev.filter((issue: Issue) => issue.id !== id))
            } else {
                console.log(res)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <tr>
            <td>{issue.name}</td>
            <td>
                <button onClick={() => handleDeleteIssue(issue.id || 0)}>Delete</button>
            </td>
        </tr>
    )
}