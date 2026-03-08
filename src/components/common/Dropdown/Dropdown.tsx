import styles from './Dropdown.module.css';
import type { ChangeEvent } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  id,
  ariaLabel,
}: DropdownProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      id={id}
      className={styles.dropdown}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}