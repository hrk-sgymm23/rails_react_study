import React from "react";
import { IssueItem } from "./Issueitem";
import { Issue } from "../interfaces/index";

interface IssueListProps {
    issues: Issue[]
    setIssues: Function
}

export const IssueList: React.FC<IssueListProps> = ({ issues, setIssues }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Issues</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    issues.map((issue: Issue, index:  number) => {
                        return (
                            <IssueItem
                                key={index}
                                issue={issue}
                                setIssues={setIssues}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
