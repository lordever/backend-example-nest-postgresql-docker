import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: 1, description: "User id who will get ban"})
    readonly userId: number;

    @ApiProperty({example: "Incorect behavior", description: "Ban Reason"})
    readonly banReason: string;
}
