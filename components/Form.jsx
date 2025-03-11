'use client';
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");  // ⬅ Error message ke liye state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("API Response:", result); 

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // ✅ Success message 3s baad hide ho jayega
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(result.message || "Failed to send message!");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong! Please try again.");
    }

    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <User className="absolute right-6 text-gray-400" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <MailIcon className="absolute right-6 text-gray-400" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} required />
        <MessageSquare className="absolute top-4 right-6 text-gray-400" size={20} />
      </div>

      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>

      {/* ✅ Success Message */}
      {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}

      {/* ❌ Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default Form;
