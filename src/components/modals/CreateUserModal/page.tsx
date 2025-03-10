"use client";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { postAPIWithAuth } from "@/utils/api";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useDispatch } from 'react-redux';
import { createUser } from '@/store/slices/usersSlice';
import { AppDispatch } from "@/store";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  role: Yup.string().required("Role is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  timezone: Yup.string().required("Timezone is required"),
});

const initialValues = {
  email: "",
  name: "",
  role: "admin",
  language: "en",
  timezone: "UTC",
  role_id: 1,
  password: "",
};

const timezones = [
  { value: "UTC", label: "UTC" },
  { value: "GMT", label: "GMT" },
  { value: "EST", label: "EST" },
  { value: "PST", label: "PST" },
  // Add more timezones as needed
];

export default function CreateUserModal({
  isOpen,
  onClose,
  onSuccess,
}: CreateUserModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      setIsSubmitting(true);
      const userData = {
        ...values,
        role_id: values.role === "admin" ? 1 : 2,
      };

      const resultAction = await dispatch(createUser(userData));
      
      if (createUser.fulfilled.match(resultAction)) {
        onSuccess();
        onClose();
      }
    } catch (error: any) {
      // Error handling is done in the slice
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">
              Create New User
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue, values }) => (
                <Form className="space-y-4">
                  <InputField
                    fieldName="name"
                    label="Name"
                    placeHolder="Enter name"
                    onChange={(e) => setFieldValue("name", e.target.value)}
                    error={touched.name && errors.name}
                  />

                  <InputField
                    fieldName="email"
                    label="Email"
                    placeHolder="Enter email"
                    type="email"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    error={touched.email && errors.email}
                  />

                  <div className="space-y-2">
                    <label className="text-[18px] font-[500] text-[#24282E]">
                      Role
                    </label>
                    <Select
                      value={values.role}
                      onValueChange={(value) => setFieldValue("role", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                      </SelectContent>
                    </Select>
                    {touched.role && errors.role && (
                      <span className="text-danger text-sm">{errors.role}</span>
                    )}
                  </div>

                  <InputField
                    fieldName="language"
                    label="Language"
                    placeHolder="English"
                    // value="English"
                    // disabled
                  />

                  <div className="space-y-2">
                    <label className="text-[18px] font-[500] text-[#24282E]">
                      Timezone
                    </label>
                    <Select
                      value={values.timezone}
                      onValueChange={(value) =>
                        setFieldValue("timezone", value)
                      }
                      
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {timezones.map((timezone) => (
                          <SelectItem
                            key={timezone.value}
                            value={timezone.value}
                          >
                            {timezone.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {touched.timezone && errors.timezone && (
                      <span className="text-danger text-sm">
                        {errors.timezone}
                      </span>
                    )}
                  </div>

                  <InputField
                    fieldName="password"
                    label="Password"
                    placeHolder="Enter password"
                    type="password"
                    isPassword
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    error={touched.password && errors.password}
                  />

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
                    >
                      {isSubmitting ? "Creating..." : "Create User"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
