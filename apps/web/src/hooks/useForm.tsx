import { type ChangeEvent, type FormEvent, useState } from "react";

type FormOptions = {
  /** Default true */
  resetOnSubmit?: boolean;
};

const defaultOptions: FormOptions = {
  resetOnSubmit: true,
};

type FormProps<T> = {
  initialValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  options?: FormOptions;
};
export const useForm = <T extends object>({
  initialValues,
  onSubmit,
  options,
}: FormProps<T>) => {
  const formOptions = { ...defaultOptions, ...options };
  const [values, setValues] = useState({ ...initialValues });

  function getValue<K extends Path<T>>(field: K): NestedValue<T, K> {
    const path = field.split(".");
    let current: any = values;
    for (const p of path) {
      current = current[p];
    }
    return current;
  }

  function registerField<K extends Path<T>>(
    field: K,
  ): {
      id: string;
      name: string;
      value: NestedValue<T, K>;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    } {
    const path = field.split(".");
    const leaf = path.at(-1);
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setValues((prev) => {
        if (leaf) {
          const root = { ...prev };
          let current: any = root;
          for (const p of path.slice(0, -1)) {
            if (!current[p])
              current[p] = {};
            current = current[p];
          }
          current[leaf] = e.target.value;
          return root;
        } else {
          return prev;
        }
      });
    }
    return {
      id: path.join("-"),
      name: path.join("-"),
      value: getValue(field),
      onChange: handleChange,
    };
  }

  function registerForm() {
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      onSubmit(values);
      if (formOptions.resetOnSubmit) {
        resetForm();
      }
    }
    return {
      onSubmit: handleSubmit,
    };
  }

  function resetForm() {
    setValues({ ...initialValues });
  }

  return { values, getValue, registerField, registerForm, resetForm };
};
