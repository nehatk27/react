import React, { useState } from "react";

import initialIssues from "../../data/issues";
import IssueCard from "./IssueCard";
import EmptyState from "../EmptyState";
import type { Issue } from "../../types/issue";

function IssuesSection() {
  const [issues, setIssues] = useState(initialIssues);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sort, setSortOption] = useState("None");

  const [title, setTitle] = useState("");
  const [assigneeName, setAssigneeName] = useState("");
  const [status, setStatus] = useState<Issue["status"]>("Open");
  const [priority, setPriority] = useState<Issue["priority"]>("Medium");
  const [dueDate, setDueDate] = useState("");

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch = issue.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || issue.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" || issue.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const priorityOrder: Record<string, number> = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  let sortedIssues: Issue[] = filteredIssues;
  if (sort === "DueDate") {
    sortedIssues = [...filteredIssues].sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    );
  }
  if (sort === "Priority") {
    sortedIssues = [...filteredIssues].sort(
      (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
    );
  }

  function clearFilters() {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
    setSortOption("None");
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newIssue: Issue = {
      id: crypto.randomUUID(),
      title,
      assigneeName,
      status,
      priority,
      dueDate,
    };

    setIssues([...issues, newIssue]);

    //resetting form entries
    setTitle("");
    setAssigneeName("");
    setStatus("Open");
    setPriority("Medium");
    setDueDate("");
  }

  return (
    <section>
      <h2>Issues:</h2>
      <input
        type="search"
        name="search"
        placeholder="search here"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select
        name="status"
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In-progress">In-progress</option>
        <option value="Closed">Closed</option>
      </select>
      <select
        name="priority"
        value={priorityFilter}
        onChange={(event) => setPriorityFilter(event.target.value)}
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        name="sort"
        value={sort}
        onChange={(event) => setSortOption(event.target.value)}
      >
        <option value="None">None</option>
        <option value="DueDate">Sort by due date</option>
        <option value="Priority">Sort by priority</option>
      </select>
      <button type="button" id="clear-btn" onClick={clearFilters}>
        Clear filters
      </button>

      <form onSubmit={handleSubmit}>
        <p>Add new Issue:</p>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="enter the issue title"
        />
        <input
          type="text"
          value={assigneeName}
          onChange={(event) => setAssigneeName(event.target.value)}
          placeholder="enter the assignee name"
        />
        <select
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value as Issue["status"])}
        >
          <option value="Open">Open</option>
          <option value="In-progress">In-progress</option>
          <option value="Closed">Closed</option>
        </select>
        <select
          name="priority"
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value as unknown as Issue["priority"])
          }
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          placeholder="enter the due date"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="issues">
        {sortedIssues.length === 0 ? (
          <EmptyState />
        ) : (
          sortedIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        )}
      </div>
    </section>
  );
}

export default IssuesSection;
