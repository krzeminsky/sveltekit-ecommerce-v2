import { isStaffMember, verifyStaff } from '$lib/server/database/staff-members';
import { error } from '@sveltejs/kit';

export const handle = async ({ resolve, event }) => {
    const ip = event.getClientAddress();

    if (event.route.id?.endsWith('/admin') && !isStaffMember(ip)) throw error(404);
    else if (event.route.id?.includes('/admin/') && !verifyStaff(ip, event.cookies)) throw error(404);
    
    return await resolve(event);
}