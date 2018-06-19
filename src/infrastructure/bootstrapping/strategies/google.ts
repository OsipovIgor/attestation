import { Request } from "express";
import { OAuth2Strategy, Profile } from "passport-google-oauth";
import { googleSettings } from "../../../configs/google";

import { TYPES } from "../../../domain/constants/types";
import { IUserRepository } from "../../../domain/interfaces/repositories";
import { User } from "../../../domain/models";
import { container } from "../../ioc/ioc_container";

export const google = new OAuth2Strategy(googleSettings, function(
    request: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any) => void,
) {
    process.nextTick(async function() {
        try {
            const { name, emails, id: googleId } = profile;
            const firstName: string = name.givenName;
            const surname: string = name.familyName;
            const email: string = emails[0].value;

            const repository = container.get<IUserRepository>(TYPES.UserRepository);

            let user: User = await repository.getByGoogleId(googleId);
            if (!user) {
                user = {
                    id: null,
                    accessToken,
                    email,
                    googleId,
                    name: firstName,
                    surname,
                };
                user = await repository.createUser(user);
            }

            return done(null, user);
        } catch (e) {
            console.error(e);
            return done(e, null);
        }
    });
});
