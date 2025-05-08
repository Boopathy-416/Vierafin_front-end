export default function Select({ options = [], ...rest }) {
  return (
    <select
      className="w-full border rounded px-3 py-2"
      {...rest} // forward register props like onChange, name, ref
    >
      <option value="">-- Select --</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}