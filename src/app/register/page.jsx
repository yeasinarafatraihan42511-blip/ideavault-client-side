// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
// const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const image = e.target.image.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log({ name, image, email, password });

//     const {data, error} = await authClient.signUp.email({
//         name,
//         image,
//         email,
//         password,
//         callbackUrl: ('/')
//     })
//     console.log({data, error})
//       if(!error) { 
//         router.push('/');
//       }
//   };

//   return (
//     <Card className="border mx-auto w-125 py-10 mt-5">
//       <h1 className="text-center text-2xl font-bold">Register</h1>

//       <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
//         <TextField isRequired name="name" type="text">
//           <Label>Name</Label>
//           <Input placeholder="Enter your name" />
//           <FieldError />
//         </TextField>

//         <TextField isRequired name="image" type="text">
//           <Label>Image URL</Label>
//           <Input placeholder="Image URL" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }

//             return null;
//           }}
//         >
//           <Label>Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             if (!/[A-Z]/.test(value)) {
//               return "Password must contain at least one uppercase letter";
//             }
//             if (!/[0-9]/.test(value)) {
//               return "Password must contain at least one number";
//             }

//             return null;
//           }}
//         >
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>

//         <div className="flex gap-2">
//           <Button type="register" variant="primary">
//             <Check />
//             Register
//           </Button>
//           <Button type="reset" variant="secondary">
//             Reset
//           </Button>
//         </div>
//       </Form>
//     </Card>
//   );
// }

"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const { error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
      callbackURL: "/login",
    });

    if (error) {
      toast.error("Registration failed");
    } else {
      toast.success("Registration successful");
      form.reset(); 
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <Card className="w-[380px] p-8 shadow-lg rounded-xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h1>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="Your name" />
          </TextField>

          <TextField isRequired name="image">
            <Label>Photo URL</Label>
            <Input placeholder="https://image-url.com" />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter password" />
          </TextField>

          <Button type="submit" className="bg-blue-600 text-white">
            Register
          </Button>
        </Form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline font-medium">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}