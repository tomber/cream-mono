import { Label, TextInput, Checkbox, Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pno" value="Your pno" />
          </div>
          <TextInput
            id="pno"
            type="text"
            placeholder="199001010221"
            required={true}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
