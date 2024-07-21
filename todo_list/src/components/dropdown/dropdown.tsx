import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import styles from "./dropdown.module.css";
import { DropdownType } from "../../types/dropdown.type";
import { categories } from "../../utiles/app_constant";

export function DropDownComponent({
  options,
  onChange,
  selectedValue,
}: {
  options: DropdownType[];
  onChange: (e: DropdownType) => void;
  selectedValue: string | null;
}) {
  const [isOpen, setDropDownState] = useState(false);
  const [option, setOption] = useState<DropdownType | null>(null);

  useEffect(() => {
    if (selectedValue != null) {
      const cate = categories.find((e) => e.id === selectedValue) ?? null;
      setOption(cate);
    }
  }, []);

  function optionClicked(selectedOption: DropdownType) {
    setDropDownState((e) => !e);
    setOption(selectedOption);
    onChange(selectedOption);
  }

  return (
    <>
      <div className={styles.dropdown}>
        <div
          className={styles.dropdown_input_wrapper}
          onClick={() => setDropDownState((e) => !e)}
        >
          <input
            type="text"
            placeholder="Select task status..."
            id="custom_dropdown"
            readOnly
            value={option?.title ?? ""}
          />
          {!isOpen ? <IconCaretDownFilled /> : <IconCaretUpFilled />}
        </div>
        <div className={isOpen ? styles.show_dropdown : styles.hide_dropdown}>
          {options.map((e) => (
            <p
              className={styles.dropdown_option}
              onClick={() => optionClicked(e)}
              key={e.id}
            >
              {e.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
