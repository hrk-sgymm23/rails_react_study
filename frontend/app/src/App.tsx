import React, { useState, useEffect } from "react";
import { IssueList } from "./components/IssueList";
import { IssueForm } from "./components/IssueForm";

import { getIssues } from "./lib/api/issues";
import { Issue } from "./interfaces/index";

const App: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([])

  const handleGetIssues = async () => {
    try {
      const res = await getIssues()
      console.log(res)

      if (res?.status === 200) {
        setIssues(res.data.issues)
      } else {
        console.log(res.data.issues)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetIssues()
  }, [])

  return (
    <>
      <h1>Issue App</h1>
      <IssueForm issues={issues} setIssues={setIssues}/>
      <IssueList issues={issues} setIssues={setIssues}/>
    </>
  )

}

export default App