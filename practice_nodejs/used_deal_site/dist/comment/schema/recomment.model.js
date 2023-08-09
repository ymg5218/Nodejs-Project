"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReCommentSchema = exports.ReComment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
let ReComment = exports.ReComment = class ReComment {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongodb_1.ObjectId, required: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], ReComment.prototype, "writer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongodb_1.ObjectId, required: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], ReComment.prototype, "board_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongodb_1.ObjectId, default: 0 }),
    __metadata("design:type", mongodb_1.ObjectId)
], ReComment.prototype, "parentComment_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ReComment.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], ReComment.prototype, "datetime", void 0);
exports.ReComment = ReComment = __decorate([
    (0, mongoose_1.Schema)()
], ReComment);
exports.ReCommentSchema = mongoose_1.SchemaFactory.createForClass(ReComment);
//# sourceMappingURL=recomment.model.js.map