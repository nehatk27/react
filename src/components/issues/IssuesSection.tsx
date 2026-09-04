import { useState } from "react";

import initialIssues from "../../data/issues";
import IssueCard from "./IssueCard";
import IssueForm from "./IssueForm";
import EmptyState from "../EmptyState";
import type { Issue, IssueFormData } from "../../types/issue";

function IssuesSection() {
  const [issues, setIssues] = useState(initialIssues);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sort, setSortOption] = useState("None");

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

  function handleIssueSubmit(issue: IssueFormData) {
    setIssues((currentIssues) => [
      ...currentIssues,
      { id: crypto.randomUUID(), ...issue },
    ]);
  }

  return (
    <section>
      <h2>Existing Issues are:</h2>
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

      <div className="issues">
        {sortedIssues.length === 0 ? (
          <EmptyState />
        ) : (
          sortedIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        )}
      </div>

      <IssueForm onSubmit={handleIssueSubmit} />
    </section>
  );
}

export default IssuesSection;
