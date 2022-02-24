import { Grid, Typography, Card } from '@mui/material';

import RuleItem from './RuleItem.js'

const Content = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card>
                    <RuleItem
                        header='Vệ Sinh Chung'
                        data={[
                            {
                                title: 'KHÔNG ĐỂ RÁC TRONG PHÒNG ',
                                details: false
                            },
                            {
                                title: ' Mọi người sử dụng cái gì xong thì nên bỏ luôn vô thùng rác. Cái này rất quan trọng vì mình đã cam kết với Chủ Tòa về vấn đề vệ sinh để được sắp xếp phòng như cũ !',
                                details: true
                            },
                            {
                                title: ' Với tần suất dọn rác 3ngày/lần thì chỉ nên bỏ vào thùng rác những thứ không có mùi',
                                details: true
                            },
                            {
                                title: ' Đồ ăn thừa, bao , hộp... đựng đồ ăn dính mùi nên đem thẳng ra hành lang để cô lao công dọn luôn trong ngày',
                                details: true
                            }
                        ]}
                    />
                    <RuleItem
                        header='Vệ Sinh Cá Nhân'
                        data={[
                            {
                                title: 'Mỗi người giữ chỗ ở của mình sạch một tí là được',
                                details: true
                            }
                        ]}
                    />
                    <RuleItem
                        header='Phân Chia Công Việc'
                        data={[
                            {
                                title: 'CHỈ CÓ MỘT VIỆC LÀ DỌN RÁC TỪ THÙNG ĐEM RA NGOÀI HÀNH LANG ',
                                details: false
                            },
                            {
                                title: ' Phân chia xen kẽ xoay vòng Người/Tuần. Theo tham khảo thì mình thấy nên tầm 3 ngày thì xử lí rác 1 lần, tránh việc rác quá nhiều',
                                details: true
                            }
                        ]}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card elevation={3}>
                    <RuleItem
                        header='Giờ Giấc Sinh Hoạt'
                        data={[
                            {
                                title: 'Tránh vấn đề giờ giấc khác nhau ảnh hưởng',
                                details: false
                            },
                            {
                                title: 'Mỗi người nên có một cái đèn bàn cá nhân riêng',
                                details: true
                            },
                            {
                                title: 'Tầm 12h sẽ tắt đèn phòng',
                                details: true
                            },
                            {
                                title: 'Ai có nhu cầu hoạt động thì bật đèn bàn của mình lên',
                                details: true
                            },
                        ]}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card elevation={3}>
                    <RuleItem
                        header='Tiết Kiệm Điện'
                        data={[
                            {
                                title: 'Chủ yếu là máy lạnh',
                                details: false
                            },
                            {
                                title: 'Nếu bật máy lạnh 18/24 thì tầm > 1tr7 (có khi lên 2tr @@)',
                                details: true
                            },
                            {
                                title: 'Phòng mình nên thống nhất về giờ giấc bật máy lạnh chứ nhiều tiền quá trả deo nổi',
                                details: true
                            },
                        ]}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}

export default Content