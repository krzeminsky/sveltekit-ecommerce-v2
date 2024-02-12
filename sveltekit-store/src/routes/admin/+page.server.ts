import { authorizeStaff, isStaffMember } from '$lib/server/database/staff-members.js';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ getClientAddress }) => {
    if (!isStaffMember(getClientAddress())) throw error(404);
}

export const actions = {
    default: async ({ request, cookies, getClientAddress }) => {
        const data = await request.formData();

        const password = data.get('password') as string;
        if (!password) return fail(400);

        const res = authorizeStaff(getClientAddress(), password, cookies);
        if (!res) return fail(400);

        throw redirect(302, "/admin/dashboard");
    }
}