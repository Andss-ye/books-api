-- CreateTable
CREATE TABLE "public"."books" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "anio" INTEGER NOT NULL DEFAULT 2000,
    "disponible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
