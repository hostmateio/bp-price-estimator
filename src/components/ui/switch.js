// Switch.js
const Switch = ({ checked, onCheckedChange }) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-200 ease-in-out focus:outline-none
          focus-visible:ring-2 focus-visible:ring-tealCustom-500 focus-visible:ring-opacity-75
          ${checked ? 'bg-tealCustom-500' : 'bg-gray-200'}
        `}
      >
        <span
          className={`
            ${checked ? 'translate-x-6' : 'translate-x-1'}
            inline-block h-4 w-4 transform rounded-full bg-white
            transition duration-200 ease-in-out
          `}
        />
      </button>
    );
  };
  
  export default Switch;