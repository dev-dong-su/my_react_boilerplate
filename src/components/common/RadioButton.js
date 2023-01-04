import tw from 'tailwind-styled-components';

const Label = tw.label`text-slate-300 transition ease-in duration-100 text-3xl
peer-checked:border-b-2 peer-checked:border-b-orange-400 peer-checked:text-orange-400 p-1`;

const RadioButton = props => {
  return (
    <div>
      <input
        id={props.id}
        onChange={props.handler}
        value={props.value}
        type="radio"
        className="appearance-none peer"
        checked={props.isSelected === props.id}
      />
      <Label htmlFor={props.id}>{props.label}</Label>
    </div>
  );
};

export default RadioButton;
