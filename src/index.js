import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'vie-faq/vie-faq', {
	title: __( 'Vie FAQ Collapsible Dropdown', 'vie-faq' ),
	icon: 'excerpt-view',
	category: 'layout',
	attributes: {
		question: {
			type: 'array',
			source: 'children',
			selector: '.vie-faq-question',
		},
		answer: {
			type: 'array',
			source: 'children',
			selector: '.vie-faq-answer',
		},
	},
	example: {
		attributes: {
			question: __( 'Do you know what Lorem Ipsum is?' ),
			answer: __( 'Yes, I do. It is very useful.' ),
		},
	},
	edit: ( props ) => {
		const {
			attributes: { question, answer },
			setAttributes,
			className,
		} = props;
		const onChangeQuestion = ( newQuestion ) => {
			setAttributes( {
				question: newQuestion,
			} );
		};
		const onChangeAnswer = ( newAnswer ) => {
			setAttributes( {
				answer: newAnswer,
			} );
		};
		return (
			<div className="vie-faq">
				<RichText
					tagName="p"
					className={ className }
					onChange={ onChangeQuestion }
					value={ question }
				/>

				<RichText
					tagName="p"
					className={ className }
					onChange={ onChangeAnswer }
					value={ answer }
				/>
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div className="vie-faq">
				<div className="vie-faq-question-wrapper">
					<RichText.Content
						tagName="p"
						className="vie-faq-question"
						value={ props.attributes.question }
					/>
					<div className="vie-faq-question-arrow"> </div>
				</div>

				<div className="vie-faq-answer-wrapper">
					<div>
						<RichText.Content
							tagName="p"
							className="vie-faq-answer"
							value={ props.attributes.answer }
						/>
					</div>
				</div>
			</div>
		);
	},
} );
