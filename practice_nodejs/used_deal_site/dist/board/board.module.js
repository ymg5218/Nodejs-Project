"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModule = void 0;
const common_1 = require("@nestjs/common");
const board_service_1 = require("./board.service");
const board_controller_1 = require("./board.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("../user/user.module");
const board_schema_1 = require("./schema/board.schema");
const board_dto_1 = require("./dto/board.dto");
const comment_module_1 = require("../comment/comment.module");
const user_schema_1 = require("../user/schema/user.schema");
let BoardModule = exports.BoardModule = class BoardModule {
};
exports.BoardModule = BoardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Board', schema: board_schema_1.BoardSchema },
                { name: 'User', schema: user_schema_1.UserSchema },
            ]),
            user_module_1.UserModule,
            comment_module_1.CommentModule,
        ],
        providers: [board_service_1.BoardService, board_dto_1.BoardDTO],
        controllers: [board_controller_1.BoardController]
    })
], BoardModule);
//# sourceMappingURL=board.module.js.map