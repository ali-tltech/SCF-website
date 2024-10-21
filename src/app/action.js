'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitContact(data) {
    try {
        console.log('Submitting contact form from actions:', data);
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                message: data.message,
            },
        });
        return { success: true, contact };
    } catch (error) {
        console.error('Error submitting form:', error);
        throw new Error('Failed to submit contact form');
    } finally {
        await prisma.$disconnect();
    }
}