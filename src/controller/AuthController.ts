import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export class AutheController {
	async autheticate(req: Request, res: Response) {
		const { email, password } = req.body;

		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			return res.json({ error: 'User not found' });
		}
		const isValuePassword = await compare(password, user.password);
		if (!isValuePassword) {
			return res.json({ error: 'passsword invalid' });
		}
		const token = sign({ id: user.id }, 'secret', { expiresIn: '1d' });
		const { id } = user;
		return res.json({ user: { id, email }, token });
	}
}
