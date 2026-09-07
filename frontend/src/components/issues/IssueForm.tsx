import { useState } from "react";
import type { Issue, IssueFormData } from "../../types/issue";

type IssueFormProps = {
  onSubmit: (formData: IssueFormData) => void;
};

type FormErrors = {
  title?: string;
  description?: string;
  project?: string;
  assigneeName?: string;
  dueDate?: string;
};

const initialBlankData: IssueFormData = {
  title: "",
  description: "",
  project: "",
  assigneeName: "",
  status: "Open",
  priority: "Medium",
  dueDate: "",
  labels: [],
};

function IssueForm({ onSubmit }: IssueFormProps) {
  const [formData, setFormData] = useState<IssueFormData>(initialBlankData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [cancel, setCancel] = useState(initialBlankData);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
      setFormData(initialBlankData); //resetting form entries
      setErrors({});
    }

    setIsSubmitting(false);
  }

  function validateForm() {
    const newErrors: FormErrors = {};

    if (
      !formData.title ||
      formData.title.trim() === "" ||
      formData.title.trim().length < 3
    ) {
      newErrors.title = "Issue must have a title with atleast 3 characters.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Issue must have a description";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Issue must be of a project";
    }

    if (!formData.assigneeName.trim()) {
      newErrors.assigneeName = "Issue must have a assigneeName";
    }

    if (!formData.dueDate.trim()) {
      newErrors.dueDate = "Issue must have a dueDate";
    }

    return newErrors;
  }

  function confirmCancel() {
    const hasChanges =
      formData.title.trim() !== "" ||
      formData.description.trim() !== "" ||
      formData.project.trim() !== "" ||
      formData.assigneeName.trim() !== "" ||
      formData.dueDate !== "" ||
      formData.status !== "Open" ||
      formData.priority !== "Medium" ||
      formData.labels.length > 0;

    if (hasChanges) {
      const confirmed = window.confirm(
        "You have unsaved changes. Do you want to discard them?",
      );
      if (!confirmed) {
        return;
      }
    }

    setFormData(initialBlankData);
    setErrors({});
  }

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      {Object.keys(errors).length > 0 && (
        <div className="error-summary">
          <p>Please fix the following errors!</p>
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="form-heading">Add new Issue:</p>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        placeholder="enter the issue title"
      />
      {errors.title && <p className="field-error">{errors.title}</p>}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={formData.description}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
        placeholder="enter the issue description"
      />
      {errors.description && (
        <p className="field-error">{errors.description}</p>
      )}

      <label htmlFor="project">project name</label>
      <input
        id="project"
        type="text"
        value={formData.project}
        onChange={(event) =>
          setFormData({ ...formData, project: event.target.value })
        }
        placeholder="enter the project name"
      />
      {errors.project && <p className="field-error">{errors.project}</p>}

      <label htmlFor="assigneeName">assigneeName</label>
      <input
        id="assigneeName"
        type="text"
        value={formData.assigneeName}
        onChange={(event) =>
          setFormData({ ...formData, assigneeName: event.target.value })
        }
        placeholder="enter the assignee name"
      />
      {errors.assigneeName && (
        <p className="field-error">{errors.assigneeName}</p>
      )}

      <label htmlFor="status">status</label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={(event) =>
          setFormData({
            ...formData,
            status: event.target.value as Issue["status"],
          })
        }
      >
        <option value="Open">Open</option>
        <option value="In-progress">In-progress</option>
        <option value="Closed">Closed</option>
      </select>

      <label htmlFor="priority">priority</label>
      <select
        id="priority"
        name="priority"
        value={formData.priority}
        onChange={(event) =>
          setFormData({
            ...formData,
            priority: event.target.value as Issue["priority"],
          })
        }
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <label htmlFor="dueDate">dueDate</label>
      <input
        id="dueDate"
        type="date"
        value={formData.dueDate}
        onChange={(event) =>
          setFormData({ ...formData, dueDate: event.target.value })
        }
        placeholder="enter the due date"
      />
      {errors.dueDate && <p className="field-error">{errors.dueDate}</p>}

      <label htmlFor="labels">labels</label>
      <input
        id="labels"
        type="text"
        value={formData.labels.join(", ")}
        onChange={(event) =>
          setFormData({
            ...formData,
            labels: event.target.value
              .split(",")
              .map((label) => label.trim())
              .filter(Boolean),
          })
        }
        placeholder="enter labels separated by commas"
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting.." : "Submit"}
      </button>

      <button type="button" onClick={confirmCancel}>
        Cancel
      </button>
    </form>
  );
}

export default IssueForm;
