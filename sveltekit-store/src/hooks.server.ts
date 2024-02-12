import { verifyStaff } from '$lib/server/database/staff-members';
import { error } from '@sveltejs/kit';

export const handle = async ({ resolve, event }) => {
    if (event.route.id?.includes('/admin/') && !verifyStaff(event.getClientAddress(), event.cookies)) {
        throw error(404);
    }
    
    return await resolve(event);
}