const Input = ({ type, name, placeholder, label, value, onChange }) => {
  return (
    <fieldset className="relative">
      <label
        htmlFor={name}
        className={`absolute left-0 -top-5 z-10 transition-all duration-500 text-sm font-medium text-greenColor ${
          value ? "translate-y-0" : " translate-y-6"
        } `}
      >
        {label}
      </label>
      <input
        className="block py-2 px-5 rounded-md border-b border-gray-300 w-full outline-none relative z-20"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        required
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Input;
