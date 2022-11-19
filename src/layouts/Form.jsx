const Form = ({ children }) => {
  return (
    <form className="bg-white shadow-xl border-3 border-gray-200 rounded-lg px-8 pt-6 pb-8 mb-4">
      {children}
    </form>
  );
};

export default Form;
