import React, {useState} from "react"
import {createIssue} from "../lib/api/issues"
import {Issue} from "../interfaces/index"

interface IssueFormProps {
    issues: Issue[]
    setIssues: Function
}

export const IssueForm: React.FC<IssueFormProps> = ({ issues, setIssues  }) => {
    const [name, setName] = useState<string>("")

    const handleCreateIssue = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data: Issue = {
            name: name
        }

        try {
            const res = await createIssue(data)
            console.log(res)

            if(res.status == 200) {
                setIssues([...issues, res.data.todo])
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }

        setName("")
    }
    return (
        <form onSubmit={handleCreateIssue}>
            <input 
                type="text" 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                }}
                />
                <input type="submit" value="Add" disabled={!name} />
        </form>
    )
}