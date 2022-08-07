import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: "ADMIN", description: "User Role"})
    readonly value: string;

    @ApiProperty({example: 1, description: "User id who will get new role"})
    readonly userId: number;
}
