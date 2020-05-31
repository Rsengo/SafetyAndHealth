using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace SafetyAndHealth.Db.Migrations
{
    public partial class AddBriefing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_UserProtocols_FileId",
                table: "UserProtocols");

            migrationBuilder.DropIndex(
                name: "IX_UserCertificates_FileId",
                table: "UserCertificates");

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthdayDate",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ContactPhoneNumber",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BriefingType",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BriefingType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Briefing",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    InstructorId = table.Column<string>(nullable: false),
                    MediaUrl = table.Column<string>(nullable: true),
                    TextFileId = table.Column<long>(nullable: false),
                    TypeId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Briefing", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Briefing_AspNetUsers_InstructorId",
                        column: x => x.InstructorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Briefing_FileDescriptions_TextFileId",
                        column: x => x.TextFileId,
                        principalTable: "FileDescriptions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Briefing_BriefingType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "BriefingType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BriefingJournalRecord",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BriefingId = table.Column<long>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    DateOfPassage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BriefingJournalRecord", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BriefingJournalRecord_Briefing_BriefingId",
                        column: x => x.BriefingId,
                        principalTable: "Briefing",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BriefingJournalRecord_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserProtocols_FileId",
                table: "UserProtocols",
                column: "FileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserCertificates_FileId",
                table: "UserCertificates",
                column: "FileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Briefing_InstructorId",
                table: "Briefing",
                column: "InstructorId");

            migrationBuilder.CreateIndex(
                name: "IX_Briefing_TextFileId",
                table: "Briefing",
                column: "TextFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Briefing_TypeId",
                table: "Briefing",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BriefingJournalRecord_BriefingId",
                table: "BriefingJournalRecord",
                column: "BriefingId");

            migrationBuilder.CreateIndex(
                name: "IX_BriefingJournalRecord_UserId",
                table: "BriefingJournalRecord",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BriefingJournalRecord");

            migrationBuilder.DropTable(
                name: "Briefing");

            migrationBuilder.DropTable(
                name: "BriefingType");

            migrationBuilder.DropIndex(
                name: "IX_UserProtocols_FileId",
                table: "UserProtocols");

            migrationBuilder.DropIndex(
                name: "IX_UserCertificates_FileId",
                table: "UserCertificates");

            migrationBuilder.DropColumn(
                name: "BirthdayDate",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ContactPhoneNumber",
                table: "AspNetUsers");

            migrationBuilder.CreateIndex(
                name: "IX_UserProtocols_FileId",
                table: "UserProtocols",
                column: "FileId");

            migrationBuilder.CreateIndex(
                name: "IX_UserCertificates_FileId",
                table: "UserCertificates",
                column: "FileId");
        }
    }
}
