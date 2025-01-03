import * as axiosUtility from "../../utility/axiosInstance"

export const boardAction = {
    async requestBoardList(payload) {
        const { djangoAxiosInstance } = axiosUtility.createAxiosInstances()

        const { page, perPage } = payload

        try {
            const res = await djangoAxiosInstance.get(`/board/list?page=${page}&perPage=${perPage}`);

            console.log("Response Data:", res.data);

            // 데이터 설정
            this.boardList = res.data.boardList || [];
            this.totalPages = res.data.totalPages || 0;
            this.totalItems = res.data.totalItems || 0;
            this.currentPage = page;
        } catch (error) {
            console.error("requestBoardList() 중 에러:", error);

            // 에러가 발생해도 상태를 초기화
            this.boardList = [];
            this.totalPages = 0;
            this.currentPage = 1;
        }
    },
    async requestCreateBoard(payload) {
        const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

        const { title, content, userToken } = payload

        try {
            const res = await djangoAxiosInstance.post(`/board/create`, {
                title, content, userToken
            });

            console.log("Create Board Response Data:", res.data);

            if (res.data) {
                console.log("Board created successfully.");
                // 필요한 추가 동작 (예: 새로고침, 알림)
            } else {
                console.error("Failed to create board:", res.data.message || "Unknown error");
            }
        } catch (error) {
            console.error("requestCreateBoard() 중 에러:", error);
        }
    },
    async requestReadBoard(boardId) {
        try {
            const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();
            const res = await djangoAxiosInstance.get(`/board/${boardId}`);
            console.log(`res: ${JSON.stringify(res)}`)
            this.board = res.data;
        } catch (error) {
            console.error("게시글 정보를 가져오는 데 실패했습니다:", error);
            this.board = null;
        }
    },
}