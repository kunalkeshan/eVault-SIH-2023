import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'POST': {
			return await loginUser(req, res);
		}
	}
}

interface LoginApiRequest extends NextApiRequest {
	body: {
		accessToken: string;
		refreshToken: string;
	};
}

async function loginUser(req: LoginApiRequest, res: NextApiResponse) {
	setCookie('legal-ledger-access-token', req.body.accessToken, {
		req,
		res,
		httpOnly: true,
	});
	setCookie('legal-ledger-refresh-token', req.body.refreshToken, {
		req,
		res,
		httpOnly: true,
	});
	return res.status(200).json({ message: 'user/login-success' });
}
