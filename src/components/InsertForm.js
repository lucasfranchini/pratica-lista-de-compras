import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
    const result = axios.post('http://localhost:4000/list',newItem);
    setText("");
    result.then(()=>{
      onAddItem();
    })  
    result.catch(()=>{
      alert('houve algum erro ao adicionar novos item na lista')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
