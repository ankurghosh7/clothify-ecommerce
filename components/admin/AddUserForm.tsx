"use client";
import React from "react";
import AdminUserPermissionSelect from "@/components/admin/_ui/AdminUserPermissionSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TAdminUserFormProps } from "@/types";

const AddUserForm = () => {
  const { register, handleSubmit, control } = useForm<TAdminUserFormProps>();
  const onSubmit: SubmitHandler<TAdminUserFormProps> = async (d, e) => {
    e?.preventDefault();
  };
  return (
    <form className="max-w-2xl mx-auto mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input
              type="text"
              id="first-name"
              className="input"
              placeholder="John"
              alt="First Name"
              {...register("firstName", { required: true })}
            />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              type="text"
              id="last-name"
              className="input"
              placeholder="Doe"
              alt="Last Name"
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="input"
            placeholder=""
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="input"
            placeholder="********"
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            className="input"
            {...register("role", { required: true })}
          >
            <option value="admin">Admin</option>
            <option value="user">Super Admin</option>
          </select>
        </div>
        <Controller
          name="permissions"
          control={control}
          render={({ field }) => (
            <AdminUserPermissionSelect onValueChange={field.onChange} />
          )}
        />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default AddUserForm;
