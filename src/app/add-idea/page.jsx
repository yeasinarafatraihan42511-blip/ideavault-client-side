"use client";

import { Card, Form, Input, Select, Button, CardBody, TextArea, axios} from "@heroui/react";
import axios from "axios";



const categories = [
    "Tech",
    "Health",
    "AI",
    "Education",
    "Finance",
    "Business",
];

const AddIdea = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const ideaData = {
            title: form.title.value,
            shortDescription: form.shortDescription.value,
            detailedDescription: form.detailedDescription.value,
            category: form.category.value,
            tags: form.tags.value,
            image: form.image.value,
            budget: form.budget.value,
            audience: form.audience.value,
            problem: form.problem.value,
            solution: form.solution.value,
        };

        console.log(ideaData);
        fetch('http://localhost:5000/ideas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ideaData)
        })
        const res = await axios.post(
            "http://localhost:5000/ideas",
            ideaData
        );

        console.log(res.data);
    };

    return (
        <div className="max-w-6xl mx-auto px-5 py-16">

            <Card className="shadow-xl border p-8">

                <div className="mb-10 text-center">

                    <h1 className="text-4xl font-bold">
                        Submit Your Startup Idea
                    </h1>

                    <p className="text-default-500 mt-3">
                        Share innovative concepts and get community feedback
                    </p>

                </div>

                <Form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-6"
                >

                    <Input
                        label="Idea Title"
                        name="title"
                        placeholder="Enter idea title"
                        isRequired
                    />

                    <Select
                        label="Category"
                        name="category"
                        placeholder="Select category"
                    >
                        <option value="Tech">Tech</option>
                        <option value="Health">Health</option>
                        <option value="AI">AI</option>
                        <option value="Education">Education</option>
                        <option value="Finance">Finance</option>
                        <option value="Business">Business</option>
                    </Select>

                    <Input
                        label="Short Description"
                        name="shortDescription"
                        placeholder="Brief summary"
                        isRequired
                    />

                    <Input
                        label="Tags"
                        name="tags"
                        placeholder="AI, Startup, Education"
                    />

                    <Input
                        label="Image URL"
                        name="image"
                        placeholder="https://..."
                        isRequired
                    />

                    <Input
                        label="Estimated Budget"
                        name="budget"
                        placeholder="$5000"
                    />

                    <Input
                        label="Target Audience"
                        name="audience"
                        placeholder="Students, Businesses..."
                        isRequired
                    />

                    <div className="md:col-span-2">

                        <TextArea
                            label="Detailed Description"
                            name="detailedDescription"
                            placeholder="Explain your idea..."
                            minRows={4}
                            isRequired
                        />

                    </div>

                    <div className="md:col-span-2">

                        <TextArea
                            label="Problem Statement"
                            name="problem"
                            placeholder="What problem are you solving?"
                            minRows={4}
                            isRequired
                        />

                    </div>

                    <div className="md:col-span-2">

                        <TextArea
                            label="Proposed Solution"
                            name="solution"
                            placeholder="How does your idea solve the problem?"
                            minRows={4}
                            isRequired
                        />

                    </div>

                    <div className="md:col-span-2">

                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="w-full"
                        >
                            Submit Idea
                        </Button>

                    </div>

                </Form>

            </Card>

        </div>
    );
};

export default AddIdea;