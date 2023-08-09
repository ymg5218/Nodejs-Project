"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const comment_controller_1 = require("./comment.controller");
const mongoose_1 = require("@nestjs/mongoose");
const comment_model_1 = require("./schema/comment.model");
const user_module_1 = require("../user/user.module");
const board_module_1 = require("../board/board.module");
const user_schema_1 = require("../user/schema/user.schema");
const recomment_model_1 = require("./schema/recomment.model");
const board_schema_1 = require("../board/schema/board.schema");
let CommentModule = exports.CommentModule = class CommentModule {
};
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Comment', schema: comment_model_1.CommentSchema },
                { name: 'ReComment', schema: recomment_model_1.ReCommentSchema },
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Board', schema: board_schema_1.BoardSchema }
            ]),
            user_module_1.UserModule,
            (0, common_1.forwardRef)(() => board_module_1.BoardModule),
        ],
        providers: [comment_service_1.CommentService],
        controllers: [comment_controller_1.CommentController]
    })
], CommentModule);
//# sourceMappingURL=comment.module.js.map