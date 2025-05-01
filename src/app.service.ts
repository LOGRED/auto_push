import {Injectable} from '@nestjs/common';
import simpleGit from "simple-git";
import chokidar from 'chokidar';
import * as console from "node:console";
import * as path from "node:path";

@Injectable()
export class AppService {
    getHello(): string {
        const git = simpleGit();
        const date = new Date();

        const push = async () => {
            try {
                await git.add('.')
                await git.commit(`${date.getFullYear()}년${date.getMonth()}월${date.getDate()}일 ${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`);
                await git.push('origin', 'main')
            } catch (error) {
                console.error(error);
            }
        }

        push().then(() => {
            console.log("푸쉬 완료")
        })

        return '검사 시작입니다';
    }
}
