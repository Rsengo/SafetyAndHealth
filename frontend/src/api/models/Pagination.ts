export interface PaginationRequestDto {
    page: number;

    rowsOnPage: number;
}

export interface PaginationResponseDto<TData> {
    totalCount: number;

    data: TData[];
}