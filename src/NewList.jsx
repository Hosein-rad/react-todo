export function NewList({ name, id, completed, toggleComplete, deletion }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={completed}
          onChange={(e) => toggleComplete(id, e.target.checked)}
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-delete onClick={() => deletion(id)}>
        Delete
      </button>
    </li>
  );
}
