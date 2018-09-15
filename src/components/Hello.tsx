import * as React from "react";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onChange?: (e: string) => void;
}

function Hello({ name, enthusiasmLevel = 1, onChange }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  const handleChange = onChange
    ? (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)
    : undefined;

  return (
    <div className="row">
      <div className="col s12">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                className="materialize-textarea"
                onChange={handleChange}
              />
              <label>Input text to hash</label>
            </div>
          </div>
        </form>
        <div className="col">
          <h5>The output of the SHA256 hashing function is</h5>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Hello;
