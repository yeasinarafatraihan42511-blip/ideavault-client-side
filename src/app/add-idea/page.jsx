// "use client";

// import { Card, Form, Input, Select, Button, CardBody, TextArea,} from "@heroui/react";




// const categories = [
//     "Tech",
//     "Health",
//     "AI",
//     "Education",
//     "Finance",
//     "Business",
// ];

// const AddIdea = () => {
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const ideaData = Object.fromEntries(formData.entries());
//         console.log(ideaData);

//         const res = await fetch('http://localhost:5000/ideas', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(ideaData)
//         });
//         const data = await res.json();
//         console.log(data);

//     }

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     const form = e.target;

//     //     const ideaData = {
//     //         title: form.title.value,
//     //         shortDescription: form.shortDescription.value,
//     //         detailedDescription: form.detailedDescription.value,
//     //         category: form.category.value,
//     //         tags: form.tags.value,
//     //         image: form.image.value,
//     //         budget: form.budget.value,
//     //         audience: form.audience.value,
//     //         problem: form.problem.value,
//     //         solution: form.solution.value,
//     //     };

//     //     console.log(ideaData);
//     //     fetch('http://localhost:5000/ideas', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify(ideaData)
//     //     })
//     //     const res = await axios.post(
//     //         "http://localhost:5000/ideas",
//     //         ideaData
//     //     );

//     //     console.log(res.data);
//     // };

//     return (
//         <div className="max-w-6xl mx-auto px-5 py-16">

//             <Card className="shadow-xl border p-8">

//                 <div className="mb-10 text-center">

//                     <h1 className="text-4xl font-bold">
//                         Submit Your Startup Idea
//                     </h1>

//                     <p className="text-default-500 mt-3">
//                         Share innovative concepts and get community feedback
//                     </p>

//                 </div>

//                 <Form
//                     onSubmit={onSubmit}
//                     className="grid md:grid-cols-2 gap-6"
//                 >

//                     <Input
//                         label="Idea Title"
//                         name="title"
//                         placeholder="Enter idea title"
//                         isRequired
//                     />

//                     <Select
//                         label="Category"
//                         name="category"
//                         placeholder="Select category"
//                     >
//                         <option value="Tech">Tech</option>
//                         <option value="Health">Health</option>
//                         <option value="AI">AI</option>
//                         <option value="Education">Education</option>
//                         <option value="Finance">Finance</option>
//                         <option value="Business">Business</option>
//                     </Select>

//                     <Input
//                         label="Short Description"
//                         name="shortDescription"
//                         placeholder="Brief summary"
//                         isRequired
//                     />

//                     <Input
//                         label="Tags"
//                         name="tags"
//                         placeholder="AI, Startup, Education"
//                     />

//                     <Input
//                         label="Image URL"
//                         name="image"
//                         placeholder="https://..."
//                         isRequired
//                     />

//                     <Input
//                         label="Estimated Budget"
//                         name="budget"
//                         placeholder="$5000"
//                     />

//                     <Input
//                         label="Target Audience"
//                         name="audience"
//                         placeholder="Students, Businesses..."
//                         isRequired
//                     />

//                     <div className="md:col-span-2">

//                         <TextArea
//                             label="Detailed Description"
//                             name="detailedDescription"
//                             placeholder="Explain your idea..."
//                             minRows={4}
//                             isRequired
//                         />

//                     </div>

//                     <div className="md:col-span-2">

//                         <TextArea
//                             label="Problem Statement"
//                             name="problem"
//                             placeholder="What problem are you solving?"
//                             minRows={4}
//                             isRequired
//                         />

//                     </div>

//                     <div className="md:col-span-2">

//                         <TextArea
//                             label="Proposed Solution"
//                             name="solution"
//                             placeholder="How does your idea solve the problem?"
//                             minRows={4}
//                             isRequired
//                         />

//                     </div>

//                     <div className="md:col-span-2">

//                         <Button
//                             type="submit"
//                             color="primary"
//                             size="lg"
//                             className="w-full"
//                         >
//                             Submit Idea
//                         </Button>

//                     </div>

//                 </Form>

//             </Card>

//         </div>
//     );
// };

// export default AddIdea;
"use client";

import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Label,
  ListBox,
} from "@heroui/react";


const AddIdea = () => {

  const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const ideaData = Object.fromEntries(
      formData.entries()
    );

     



    console.log(ideaData);

    try {

      const res = await fetch(
        "http://localhost:5000/ideas",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ideaData),
        }
      );

      const data = await res.json();

      console.log(data);

      e.target.reset();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="max-w-7xl mx-auto px-5 py-14">

      <Card className="p-8 md:p-10 border shadow-sm">

        {/* heading */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Submit Your Idea
          </h1>

          <p className="text-default-500 mt-2">
            Share your startup concept with the world and get valuable feedback.
          </p>

        </div>

        {/* form */}

        <Form
          onSubmit={onSubmit}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* idea title */}

          <Input
            label="Idea Title"
            name="title"
            placeholder="E.g., Next-gen AI Assistant"
            required
            variant="bordered"
          />

          {/* category */}

          {/* <Select
            label="Category"
            name="category"
            placeholder="Select a category"
            required
            variant="bordered"
          >
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="AI">AI</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Business">Business</option>
          </Select> */}
              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Tech">
                        Tech
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Health">
                        Health
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="AI">
                        AI
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Family" textValue="Finance">
                        Finance
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Business">
                        Business
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Other">
                        Other
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

          {/* short description */}

          <div className="md:col-span-2 w-full">

            <Input
              label="Short Description"
              name="shortDescription"
              placeholder="A one-sentence summary of your idea"
              required
              variant="bordered"
            />

          </div>

          {/* detailed description */}

          <div className="md:col-span-2 w-full">

            <label className="text-sm font-medium mb-2 block">
              Detailed Description *
            </label>

            <textarea
              name="detailedDescription"
              placeholder="Explain how your idea works in detail..."
              required
              rows={5}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-primary
                bg-transparent
              "
            />

          </div>

          {/* tags */}

          <Input
            label="Tags"
            name="tags"
            placeholder="innovation, tech, startup"
            variant="bordered"
          />

          {/* image url */}

          <Input
            label="Image URL"
            name="image"
            placeholder="https://example.com/image.jpg"
            required
            variant="bordered"
          />

          {/* budget */}

          <Input
            label="Estimated Budget"
            name="budget"
            placeholder="E.g., $10k - $50k"
            variant="bordered"
          />

          {/* target audience */}

          <Input
            label="Target Audience"
            name="audience"
            placeholder="Who is this for?"
            required
            variant="bordered"
          />

          {/* problem statement */}

          <div className="w-full">

            <label className="text-sm font-medium mb-2 block">
              Problem Statement *
            </label>

            <textarea
              name="problem"
              placeholder="What problem are you solving?"
              required
              rows={4}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-primary
                bg-transparent
              "
            />

          </div>

          {/* proposed solution */}

          <div className="w-full">

            <label className="text-sm font-medium mb-2 block">
              Proposed Solution *
            </label>

            <textarea
              name="solution"
              placeholder="How does your idea solve this problem?"
              required
              rows={4}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-primary
                bg-transparent
              "
            />

          </div>

          {/* submit button */}

          <div className="md:col-span-2 w-full border-t pt-6">

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="px-10 font-semibold"
            >
              Submit Idea to Vault
            </Button>

          </div>

        </Form>

      </Card>

    </div>
  );
};

export default AddIdea;