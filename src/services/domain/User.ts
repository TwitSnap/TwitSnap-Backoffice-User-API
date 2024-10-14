import {Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity("User")
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn("uuid")
    private id: string;

    @Column({ type: "varchar", nullable: false })
    private readonly email: string;

    @Column({ type: "varchar", nullable: false })
    private readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public getId = (): string => this.id;

    public getPassword = (): string => this.password;
}