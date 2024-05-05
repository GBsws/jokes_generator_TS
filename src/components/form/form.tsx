import './form.scss'
import {useState} from 'react'

interface FormProps {
  onSubmitData:(data:FormData) => void;
}
export interface FormData = {
  name:string;
  type:'general'| 'dad'| 'knock-knock'|'programming';
  count:1|2|3|4|5|6|7|8|9|10;
}

export const Form:React.FC<FormProps> =({onSubmitData})=>{
  const [formData, setFormData]= useState<FormData>({name:"",type:"Select One", count:'Select One'})

  const options:Array = [];
  for(let i =0;i < 10; i++){
    options.push(i + 1)
  }

  const handleSubmit =(e:React.FormEvent<HTMLFormElement)=>{
    e.preventDefault()
    onSubmitData(formData);
  }

  return(
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name='name'
          onChange={(e)=> setFormData({...formData, name: e.target.value})}
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name='name'
          onChange={(e)=> setFormData({...formData, type: e.target.value})}
          required
        >
          <option value="">Select one</option>
          {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name='name'
          onChange={(e) => setFormData({...formData, count: e.target.value})}
          required
        >
          <option value="">Select one</option>
          {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <button className="form__button" type='submit'>Submit</button>
    </form>
  );
}
