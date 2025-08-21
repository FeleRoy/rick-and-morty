import Input from "./shared/ui/Input/Input"

function App() {
  return (
    <>
    <div className="bg-black font-comic text-white h-screen">
      <h1>Hello world!</h1>
      <Input
        label="Имя персонажа"
        onChange={() => {}}
        inputId="name"
        placeholder="Введите имя персонажа"
      />
    </div>
    </>
  )
}

export default App
