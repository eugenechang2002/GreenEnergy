import React from "react";
import ReactDOM from "react-dom";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";

// Component's Base CSS
import '../../styles/device.css'

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = [
  {
    id: 1,
    title: "SJSU KING library",
    description: "king@gmail.com"
  },
  {
    id: 2,
    title: "IRC Building",
    description: "irc@gmail.com"
  },
  {
    id: 3,
    title: "Student Wellness Center",
    description: "swc@gmail.com"
  }
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = tasks.length;
const service = {
  fetchItems: payload => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: task => {
    count += 1;
    tasks.push({
      ...task,
      id: count
    });
    return Promise.resolve(task);
  },
  update: data => {
    const task = tasks.find(t => t.id === data.id);
    task.title = data.title;
    task.description = data.description;
    return Promise.resolve(task);
  },
  delete: data => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

const UserTable = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Client Users List"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" hideInCreateForm />
        <Field name="title" label="Title" placeholder="Title" />
        <Field
          name="description"
          label="Email"
          render={DescriptionRenderer}
        />
      </Fields>
      <CreateForm
        title="New Client form"
        message="Create a new Client User!"
        trigger="Add Client User"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Please, provide Name";
          }

          if (!values.description) {
            errors.description = "Please, provide email";
          }

          return errors;
        }}
      />

      <UpdateForm
        title="User Update Process"
        message="Update task"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={values => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.title) {
            errors.title = "Please, provide title";
          }

          if (!values.description) {
            errors.description = "Please, provide email";
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete ?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={values => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);
export default UserTable;

UserTable.propTypes = {};

ReactDOM.render(<UserTable />, document.getElementById("root"));
