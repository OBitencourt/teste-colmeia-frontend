import { LoginForm } from "@/components/form/LoginForm";
import { Card } from "@/components/ui/card";


export default function Login () {
  return (
    <div className="bg-amber-400 h-screen flex justify-center items-center">
      <div className="w-1/3">

        <LoginForm />
      </div>
    </div>
  );
}

