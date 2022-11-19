import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button/index";
import Form from "../../layouts/Form";
import Textfield from "../../components/Textfield";
import Table from "../../components/Table";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");

  return (
    <MainLayout>
      <Form>
        <Textfield
          onChange={(e) => {
            setName(e.target.value);
          }}
          label="Nama"
          type="text"
          placeholder="Masukan Nama Anda"
        />
        <Textfield
          onChange={(e) => {
            setNim(e.target.value);
          }}
          label="NIM"
          type="number"
          placeholder="Masukan NIM Anda"
        />
        <Textfield
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email"
          type="email"
          placeholder="Masukan Email Anda"
        />
        <div className="flex items-center justify-between">
          <Button
            text="Submit"
            style="bg-blue-500 disabled:bg-gray-300 disabled:text-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </Form>
      <Table />
    </MainLayout>
  );
};

export default Home;
